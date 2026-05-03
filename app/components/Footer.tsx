export default function Footer() {
  return (
    <footer className="mt-24 lg:mt-32 border-t border-neutral-900/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-block size-4 rounded-full bg-neutral-900" />
          <span className="font-medium">Offmenu</span>
          <span className="text-neutral-500 ml-2">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          <a href="#" className="hover:text-neutral-900">Twitter</a>
          <a href="#" className="hover:text-neutral-900">LinkedIn</a>
          <a href="#" className="hover:text-neutral-900">Writing</a>
          <a href="#" className="hover:text-neutral-900">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
