import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Students from '@/components/Students';
import RegisterationForm  from '@/components/RegisterationForm';

export default function Home() {
  const headerText = '';
  const footerText = 'Made by Members of Group 3 2023';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <Nav myText={headerText} />
      <RegisterationForm  />
      <Students />
      <Footer myFooter={footerText} />
    </main>
  );
}
