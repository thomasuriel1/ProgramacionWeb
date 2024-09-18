import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/Main";
import supabase from "./lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };
    getSession();
  }, []);
  const handleClick = async () => {
    const { data, error } = supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };
  return (
    <div>
      <Header />
      <button onClick={handleClick}> Conectar con Github </button>
      <MainContent />
      <Footer />
    </div>
  );
}
