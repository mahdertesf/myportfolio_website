import React from 'react';
const SectionWrapper = ({ children, id }) => {
    return (
      <section
        id={id}
        className=" py-16  px-8 md:px-20 lg:px-24 xl:px-32 overflow-hidden "
      >
        {children}
      </section>
    );
  };
export default SectionWrapper;