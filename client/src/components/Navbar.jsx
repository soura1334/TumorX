export default function Navbar() {
  return (
    <div className="bg-[#1E3A8A] text-[#FAEED1] flex p-5 justify-around ">
      <div className="flex gap-4">
        <p>Logo</p>
        <p>TumorX</p>
      </div>
      <div className="flex justify-between w-[50%]">
        <p>Home</p>
        <p>Contact</p>
        <p>About</p>
        <p>Product</p>
      </div>
    </div>
  );
}
