import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
  import { ModeToggle } from "./modeToggle";
  const Header = ()=> {
    return (
      <header className="container flex justify-between p-10">
        <h1 className="font-bold tracking-widest">Routine</h1>
        <ModeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
      </header>
    );
  }
  
  export default Header
  