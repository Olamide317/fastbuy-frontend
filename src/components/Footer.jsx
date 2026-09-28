const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-emerald-600">fastbuy</p>
        <p>&copy; {new Date().getFullYear()} Fastbuy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
