import React from 'react';
import Container from '../sections/Container';
import WorkFlowItems from './Props/WorkFlowItems';
import WorkflowData from './Data/WorkFlowData';

const Workflow = () => {
  return (
    <div className=''>
      <div className='radiantWorkFlowMobile w-full block lg:hidden'>
        <Container>
          <div>
            <div className='flex justify-left text-white pt-24 pl-4 md:pt-24 md:pl-8 md:mb-14 sm:pt-48 sm:pl-16 sm:mb-24'>
              <div className='text-lg sm:text-xl'>
                WorkFlow
                <div className='grid grid-rows-2'>
                  <div className='box-content w-80 text-left font-semibold text-2xl sm:text-3xl pl-10 sm:pl-12'>
                    Overview
                  </div>
                  <div className='bg-PrimaryBlue h-1 w-48 ml-10 ml-12'></div>
                </div>
              </div>
            </div>
          </div>
          {WorkflowData.map((item, index) => (
            <WorkFlowItems
              key={index}
              index={index}
              num={item.num}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          ))}
        </Container>
      </div>

      <div className='radiantWorkFlow w-full lg:block hidden'>
        <Container>
          <div>
            <div className='flex justify-left text-white pt-24 pl-4 mb-20 sm:pt-48 sm:pl-16 sm:mb-24'>
              <div className='text-lg sm:text-xl'>
                WorkFlow
                <div className='grid grid-rows-2'>
                  <div className='box-content w-80 text-left font-semibold text-2xl sm:text-3xl pl-10 sm:pl-12'>
                    Overview
                  </div>
                  <div className='bg-PrimaryBlue h-1 w-48 ml-10 ml-12'></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container narrow>
          <div className='flex flex-col md:gap-y-6'>
            {WorkflowData.map((item, index) => (
              <WorkFlowItems
                key={index}
                index={index}
                num={item.num}
                src={item.src}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Workflow;

// hover:flex-auto
