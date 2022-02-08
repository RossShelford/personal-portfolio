import React from 'react';

function ContactContainer() {
  return (
    <>
        <div className='pt-36 p-10 font-poppins text-5xl text-center selection:bg-salmon dark:text-zinc-50' >
            I'd love to hear from you!
        </div>

        {/* Mobile buttons */}
        <div className='sm:hidden visible flex items-center justify-center pt-20'>
            <a href="mailto:R.Shelford@hotmail.co.uk">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-mint rounded-3xl w-32 p-8 fill-cream mx-5 shadow-xl shadow-green-100 dark:shadow-flint" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            </a>
            <a href="tel:07375995314">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-mint rounded-3xl w-32 p-8 fill-cream mx-5 shadow-xl shadow-green-100 dark:shadow-flint" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>  
            </a>
        </div>
        
            <div className='invisible sm:visible mt-24 m-10  font-poppins text-4xl text-center selection:bg-salmon dark:text-zinc-50'>
                <a href="mailto:R.Shelford@hotmail.co.uk" className='underline underline-offset-2 decoration-mint'> R.Shelford@hotmail.co.uk</a>
                <p className='p-20'>07375995314</p>
            </div>
        
    </>
  );
}

export default ContactContainer;
