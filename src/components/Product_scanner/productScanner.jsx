import React, { useState, useEffect } from 'react';
import { BrowserBarcodeReader } from '@zxing/library';

import ProductInfo from './productInfo';
import '../../styling/main_styling.scss';

const codeReader = new BrowserBarcodeReader();

const ProductScannerContent = () => {
    const [barcode, setBarcode] = useState('5900242001610');
    const [inputDevicesList, setDevices] = useState([]);

    useEffect(() => {
       const collectingListOfDevices = async () => {
        const listOfInputDevices = await codeReader
            .listVideoInputDevices()
            .then(videoInputDevices => {
                videoInputDevices.forEach(device =>
                    console.log(`${device.label}, ${device.deviceId}`)
                );
            })
            .catch(err => console.error(err));

            return inputDevicesList;
        }
    }, [inputDevicesList]);

    useEffect(() => {
        codeReader
            .decodeOnceFromVideoDevice(undefined, 'video')
            .then(result => {
                setBarcode(result.text);
            })
            .catch(err => console.error(err));
    });

    return (
        <div className='mainWindow'>
            <video id="video" width="300" height="200"></video>
            {barcode}
            {inputDevicesList}
            <ProductInfo barcode={barcode} />
        </div>
    );
}

export default ProductScannerContent;







