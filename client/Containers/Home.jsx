import React from 'react';

import BigImage from '../Components/BigImage.jsx';

const Home = () => {
  return (
    <>
      <main className='main'>
        {/* Big Image Container */}
        <BigImage />
        {/* Space Image Info */}
        <section className='main-space-fact'>
          <p>
            Pulvinar neque laoreet suspendisse interdum consectetur libero.
            Adipiscing commodo elit at imperdiet. Turpis nunc eget lorem dolor
            sed viverra. Fermentum iaculis eu non diam phasellus vestibulum
            lorem. Velit egestas dui id ornare arcu odio ut sem. Integer vitae
            justo eget magna. Ipsum faucibus vitae aliquet nec ullamcorper sit
            amet. Elit duis tristique sollicitudin nibh sit amet commodo nulla
            facilisi.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
