'use client'
// Import React and CSS module
import React, { useState } from 'react';
import styles from './ui-dashboard.module.css';

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

  // Handler to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handler to submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action with the form data
    console.log(formData);
  };
  // JSX for the form
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Input fields for each property */}
      <div className={styles.form2}>

        <input className={styles.form3} type="number" name="projectid" value={formData.projectid} onChange={handleChange} placeholder="projectid"/>
        <textarea className={styles.form3} name="collection" value={formData.collection} onChange={handleChange} placeholder="Collection" rows={4} cols={25}/>
        <textarea className={styles.form3}  name="distribution" value={formData.distribution} onChange={handleChange} placeholder="Distribution" rows={4} cols={25} />
        <textarea className={styles.form3}  name="quality" value={formData.quality} onChange={handleChange} placeholder="Quality" rows={4} cols={25}/>
        <textarea className={styles.form3} name="split" value={formData.split} onChange={handleChange} placeholder="Split" rows={4} cols={25} />
        <textarea className={styles.form3} name="bias" value={formData.bias} onChange={handleChange} placeholder="Bias" rows={4} cols={25} />
        <textarea className={styles.form3}  name="influence" value={formData.influence} onChange={handleChange} placeholder="Influence" rows={4} cols={25} />
        <textarea className={styles.form3} name="outcome" value={formData.outcome} onChange={handleChange} placeholder="Outcome" rows={4} cols={25} />
        {/* Submit button */}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

