function Navbar() {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between p-2">
        <span className="bg-purple-400">Logo</span>
        <ul className="hidden md:flex list-none space-x-5">
          <li>Links</li>
          <li>Links</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
