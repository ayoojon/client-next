import { Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import { s3FileUrl } from '../../../config';
import { ProductModal } from './ProductModal';
// import { SingleViewProduct } from './SingleViewProduct';
import { TabPanel } from './TabPanel';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';

interface Props {
  data: any;
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
  };
}

export const ProductView: React.FC<Props> = ({ data }) => {
  // const [isProductModalOpen, setProductModalState] = useState(false);
  const [productModalData, setProductModalData] = useState({});
  const [value, setValue] = useState<number>(0);

  const [isVisible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const dataHandeler = (data: any) => {
    setProductModalData({ data });
    // setProductModalState(true);
    setVisible(true);
  };

  // const toggleDataModal = () => setProductModalState(!isProductModalOpen);

  return (
    <div className="flex flex-wrap -mx-2">
      {/* {data.categories.map((product: any, index: any) => (
        <div
          key={index}
          className="w-56 cursor-pointer rounded-b-md mx-2 mb-4 transition duration-300 ease-in-out hover:shadow-xl"
          onClick={() => {
            dataHandeler(product);
          }}
        >
          <div className="h-40 w-full overflow-hidden rounded-md">
            <img className="inline-block w-full h-full object-cover" src={s3FileUrl} alt="location" />
          </div>
          <div className="p-2">
            <h6 className="font-semibold text-xl pb-2">{product.title}</h6>
          </div>
        </div>
      ))} */}
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tab"
        >
          {data.categories.map((product: any, index: any) => (
            <Tab
              key={index}
              label={product.title}
              {...a11yProps(index)}
              style={{ textTransform: 'none', outline: ' none ' }}
            />
          ))}
        </Tabs>
        {data.categories.map((product: any, index: any) => {
          return (
            <TabPanel key={index} value={value} index={index}>
              <div className="flex">
                {product.items.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="w-56 cursor-pointer rounded-b-md mx-2 border mb-4 transition duration-300 ease-in-out hover:shadow-xl relative"
                    onClick={() => {
                      dataHandeler(item);
                    }}
                  >
                    <div className="h-40 w-full overflow-hidden rounded-md">
                      {/* <img
                        className="inline-block w-full h-full object-cover"
                        src={s3FileUrl + item.image}
                        alt="location"
                      /> */}
                      <Image
                        loader={imgLoader(s3FileUrl)}
                        className="inline-block w-full h-full object-cover"
                        src={item.image}
                        alt="product"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="p-2">
                      <h6 className="font-semibold text-xl pb-2">{item.title}</h6>
                      <div className="ml-1">
                        {/* <span className="font-semibold text-primary">
                          {item.price.amount} {item.price.currency}
                        </span>{' '}
                        <span className="text-sm text-customGray-550">/ Day</span> */}
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className="bg-yellow-400 text-xs uppercase font-bold rounded-full p-1 absolute top-0 right-0 mt-1 mr-1">
                      <span>
                        {item.price.currency} {item.price.amount}{' '}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          );
        })}
      </div>
      {/* <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" {...a11yProps(1)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div>
            <h1>Hello world</h1>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div> */}
      {/* <SingleViewProduct isOpen={isProductModalOpen} onClose={toggleDataModal} data={productModalData} /> */}
      {Object.keys(productModalData).length !== 0 && (
        <ProductModal isVisible={isVisible} setVisible={handleClose} data={productModalData} />
      )}
    </div>
  );
};
