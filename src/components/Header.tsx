interface HeaderProps {
  logo: string;
}

export const Header = ({ logo }: HeaderProps) => {

  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Mushroni Logo" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Mushroni</h1>
              <p className="text-sm text-muted-foreground">Premium Mushroom Products</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};