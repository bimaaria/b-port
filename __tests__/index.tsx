import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';
 
describe('Home', () => {
  it('renders the navbar', () => {
    render(<Home />);
 
    const navbar = screen.getByRole("navigation");
    const navbarList = screen.getByRole("list");
    const navbarListItems = screen.getAllByRole("listitem");
 
    expect(navbar).toBeInTheDocument();
    expect(navbarList).toBeInTheDocument();
    expect(navbarList).toHaveClass("flex flex-col justify-center align-middle");
    expect(navbarListItems).toHaveLength(5);
  });

  it('renders the name with emerald color and font bold', () => {
    render(<Home />);
 
    const name = screen.getByText(/bima/i);
 
    expect(name).toBeInTheDocument();
    expect(name).toHaveClass("font-bold text-emerald-400");
  });
});