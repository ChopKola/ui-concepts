const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 text-center text-xs text-[#777]">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} Chopkola. Design & Develop by Chopkola Tech.
        </div>
      </footer>
  )
}

export default Footer