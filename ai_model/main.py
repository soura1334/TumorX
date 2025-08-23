from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from PIL import Image
import numpy as np
import io

MODEL_PATH = "model.h5" 
model = load_model(MODEL_PATH)

tumor_categories = ['pituitary', 'glioma', 'meningioma', 'notumor']

app = FastAPI()

@app.get('/')
def root():
    return {"message": "Working"}

IMAGE_SIZE = (64, 64)  

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        img = Image.open(io.BytesIO(contents)).convert("RGB")
        img = img.resize(IMAGE_SIZE)   # ✅ resize to 64x64

        processed_img = img_to_array(img) / 255.0
        processed_img = np.expand_dims(processed_img, axis=0)

        preds = model.predict(processed_img)
        pred_class = tumor_categories[np.argmax(preds)]
        confidence = float(np.max(preds))

        return JSONResponse({
            "prediction": pred_class,
            "confidence": confidence
        })
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)
