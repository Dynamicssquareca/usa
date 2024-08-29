import React from 'react';
import MultiStepForm from '../components/MultiStepForm';
import Head from 'next/head';

const TestForm = () => {
    
    return (
        <div>
            <Head>
                <title>test fomr</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <MultiStepForm />
        </div>
    );
}

export default TestForm;
