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
        </div>
        
            <div className='invisible sm:visible mt-24 m-10  font-poppins text-4xl text-center selection:bg-salmon dark:text-zinc-50'>
                <a href="mailto:R.Shelford@hotmail.co.uk" className='underline underline-offset-2 decoration-mint'> R.Shelford@hotmail.co.uk</a>
            </div>
        
    </>
  );
}

export default ContactContainer;
