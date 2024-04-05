'use client'
// Import React and CSS module
import React, { createContext, useState, useEffect, useContext } from 'react';
import styles from './ui-dashboard.module.css';
import axios from 'axios'; // Import Axios
import { Testing } from '../../test/testing'

// import { downloadCSV } from '../../lib/csv'

// Define the Form component
export function Form() {
  // State to manage form data

  const [formData, setFormData] = useState({
    projectid: '',
    collection: '',
    distribution: '',
    quality: '',
    split: '',
    bias: '',
    influence: '',
    outcome: ''
  });


  const [submittedData, setSubmittedData] = useState([{
    projectid: '',
    collection: '',
    distribution: '',
    quality: '',
    split: '',
    bias: '',
    influence: '',
    outcome: ''
  }]);

 


  // Handler to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    console.log("this is line 27", formData)
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setSubmittedData((prevSubmittedData) => ({
    //   ...prevSubmittedData,
    //   ...formData
    // }));


    // Create a copy of the submittedData array
    const newSubmittedData = [...submittedData];
      
    // Push the formData object into the newSubmittedData array
    newSubmittedData.push(formData);

    // Update the submittedData state with the new array
    setSubmittedData(newSubmittedData);



    console.log("this is formdata", formData);

    console.log("this is submitted data", submittedData);
  }
    // useEffect(() => {
    //   setSubmittedData(formData); // Update submittedData whenever formData changes
    // }, [formData]);
  

    // try {
    //     // const response = await fetch('/api/submitData', {
    //     const response = await fetch('../../../api/submitData', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     // body: JSON.stringify({ submittedData: formData })
    //   });
    //   console.log("line 57")
    //   console.log(response.ok)
    //   console.log(response.body)
    //   if (response.ok) {
    //     console.log('CSV file saved successfully');
    //     // Optionally, you can clear the form fields here
        
    //   } else {
    //     console.error('Failed to save CSV file');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  // };

  // // Handler to submit form data
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can perform any action with the form data
  //   setSubmittedData(formData);
  //   console.log("this is line 33", submittedData);
    
  // };

  // const downloadCSV = () => {
  //   const csvContent = `ProjectID,Collection,Distribution,Quality,Split,Bias,Influence,Outcome\n${Object.values(submittedData).join(',')}`;
  //   const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
  //   const link = document.createElement('a');
  //   link.setAttribute('href', encodedUri);
  //   link.setAttribute('download', 'submittedData.csv');
  //   document.body.appendChild(link);
  //   link.click();
  // };



  // JSX for the form
  return (
<>
    <div className={styles.topbar}>





    </div>


    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Input fields for each property */}
      <div className={styles.form2}>

        <input className={styles.form3} type="number" name="projectid" value={formData.projectid} onChange={handleChange} placeholder="projectid"/>
        <textarea className={styles.form3} name="collection" value={formData.collection} onChange={handleChange} placeholder="Collection" rows={3} cols={25}/>
        <textarea className={styles.form3}  name="distribution" value={formData.distribution} onChange={handleChange} placeholder="Distribution" rows={3} cols={25} />
        <textarea className={styles.form3}  name="quality" value={formData.quality} onChange={handleChange} placeholder="Quality" rows={3} cols={25}/>
        <textarea className={styles.form3} name="split" value={formData.split} onChange={handleChange} placeholder="Split" rows={3} cols={25} />
        <textarea className={styles.form3} name="bias" value={formData.bias} onChange={handleChange} placeholder="Bias" rows={3} cols={25} />
        <textarea className={styles.form3}  name="influence" value={formData.influence} onChange={handleChange} placeholder="Influence" rows={3} cols={25} />
        <textarea className={styles.form3} name="outcome" value={formData.outcome} onChange={handleChange} placeholder="Outcome" rows={3} cols={25} />
        {/* Submit button */}
        {/* <button onClick={downloadCSV} type="submit">Submit</button> */}
        <button type="submit">Submit</button>
      </div>
      {/* {formData && (
        <div>
          <p>ProjectID: {formData.projectid}</p>
          <p>Collection: {formData.collection}</p>
          <p>Distribution: {formData.distribution}</p>
          <p>Quality: {formData.quality}</p>
          <p>Split: {formData.split}</p>
          <p>Bias: {formData.bias}</p>
          <p>Influence: {formData.influence}</p>
          <p>Outcome: {formData.outcome}</p>
        </div>
      )} */}
    </form>
    {/* <Testing submittedData={submittedData}/>     */}


    <div className={styles.map}>
      <div className={styles.mapbox}>
        {submittedData.map((dataItem, index) => (
          <div className={styles.mapbox2} key={index}>
            <p>ProjectID: {dataItem.projectid}</p>
            <p>Collection: {dataItem.collection}</p>
            <p>Distribution: {dataItem.distribution}</p>
            <p>Quality: {dataItem.quality}</p>
            <p>Split: {dataItem.split}</p>
            <p>Bias: {dataItem.bias}</p>
            <p>Influence: {dataItem.influence}</p>
            <p>Outcome: {dataItem.outcome}</p>
          </div>
          
        ))}
      </div>
    </div>

    </div>

</>
  );
}

