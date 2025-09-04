export default function Footer() {
  return (
    <div className="bg-blue-800 p-5  text-white">
      <div className="flex gap-10 m-2 mb-5 justify-around items-center">
        <div className="flex items-center gap-5">
        <img src="/logo.png" className="h-40" />
        <p className="text-4xl font-semibold">TumorX</p>
        </div>
        <div>
          <p className="mb-2">Quick Links</p>
          <ul>
            <li>{">"} Home</li>
            <li>{">"} Features</li>
            <li>{">"} Privacy</li>
            <li>{">"} FAQ</li>
          </ul>
        </div>
        <div>
          <p className="mb-2">About Us</p>
          <ul>
            <li>{">"} Mission</li>
            <li>{">"} Vision</li>
            <li>{">"} Why Choose Us?</li>
            <li>{">"} Approach</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="justify-self-center mt-5">© 2025 TumorX. All rights reserved.</p>
    </div>
  );
}
