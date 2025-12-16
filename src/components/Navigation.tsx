"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Residential Solutions",
    href: "/residential",
    description: "Solar PV, battery storage, and energy solutions for homeowners.",
  },
  {
    title: "Commercial & Public Sector",
    href: "/commercial",
    description: "Renewable energy for businesses, local authorities, and housing associations.",
  },
  {
    title: "Consultation & Advisory",
    href: "/consultation",
    description: "Decarbonisation consulting and strategic energy planning.",
  },
];

const resources = [
  {
    title: "Funding & Support",
    href: "/funding",
    description: "Local authority funding, SPF programmes, and finance options.",
  },
  {
    title: "Smart Export Guarantee",
    href: "/seg",
    description: "Understanding SEG payments and export tariffs.",
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-heliaxis-navy/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="p-2 rounded-[10px] border-2 border-heliaxis-gold">
            <Image
              src="/assets/heliaxis-logo.png"
              alt="Heliaxis"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {resources.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button 
            asChild 
            className="bg-heliaxis-gold hover:bg-heliaxis-gold/90 text-heliaxis-navy font-semibold px-6"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-heliaxis-navy">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] bg-white">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate through Heliaxis website pages
            </SheetDescription>
            <div className="flex flex-col gap-6 mt-8">
              <Link 
                href="/" 
                className="text-lg font-medium text-heliaxis-navy hover:text-heliaxis-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-3">
                <p className="text-sm font-semibold text-heliaxis-navy/60 uppercase tracking-wider">
                  Solutions
                </p>
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-lg font-medium text-heliaxis-navy hover:text-heliaxis-gold transition-colors pl-4 border-l-2 border-heliaxis-gold/30 hover:border-heliaxis-gold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-heliaxis-navy/60 uppercase tracking-wider">
                  Resources
                </p>
                {resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-lg font-medium text-heliaxis-navy hover:text-heliaxis-gold transition-colors pl-4 border-l-2 border-heliaxis-gold/30 hover:border-heliaxis-gold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <Link 
                href="/about" 
                className="text-lg font-medium text-heliaxis-navy hover:text-heliaxis-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <div className="pt-6 border-t border-heliaxis-navy/10">
                <Button 
                  asChild 
                  className="w-full bg-heliaxis-gold hover:bg-heliaxis-gold/90 text-heliaxis-navy font-semibold"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-heliaxis-gold/10 hover:text-heliaxis-navy focus:bg-heliaxis-gold/10 focus:text-heliaxis-navy",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none text-heliaxis-navy">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-heliaxis-navy/70 mt-1.5">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

