import React from 'react';
import { useState } from 'react';
import './UploadDocument.css';

function UploadDocument({ onAddEntry }) {
  const [formData, setFormData] = useState({
    documentName: '',
    documentType: '',
    documentRemarks: '',
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.documentName) newErrors.documentName = 'Required';
    if (!formData.file) newErrors.file = 'File required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newEntry = {
      id: Date.now(),
      loanNo: `LRLU-${Math.floor(1000 + Math.random() * 9000)}`,
      loanType: formData.documentType || 'Personal Loan',
      borrower: formData.documentName || 'New Borrower',
      coBorrower: 'N/A',
      address: formData.documentRemarks || 'N/A',
      opd: Math.floor(Math.random() * 10000000),
      region: ['North', 'South', 'East', 'West'][Math.floor(Math.random() * 4)],
    };
    onAddEntry(newEntry);
    setFormData({
      documentName: '',
      documentType: '',
      documentRemarks: '',
      file: null,
    });
    setIsSubmitting(false);
  };

  return (
    <div className="upload-document">
      <h3>Upload Document</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Document Name</label>
          <select name="documentName" value={formData.documentName} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Aadhaar Card">Aadhaar Card</option>
            <option value="PAN Card">PAN Card</option>
            <option value="Passport">Passport</option>
          </select>
          {errors.documentName && <span className="error">{errors.documentName}</span>}
        </div>
        <div className="form-group">
          <label>Document Type</label>
          <select name="documentType" value={formData.documentType} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Home Loan">Home Loan</option>
            <option value="Car Loan">Car Loan</option>
            <option value="Personal Loan">Personal Loan</option>
          </select>
        </div>
        <div className="form-group">
          <label>Document Remarks</label>
          <textarea
            name="documentRemarks"
            value={formData.documentRemarks}
            onChange={handleChange}
            placeholder="Enter remarks"
          />
        </div>
        <div className="form-group">
          <label>Type File</label>
          <div className="file-input-wrapper">
            <label className="file-input-label">
              Choose File
              <input
                type="file"
                name="file"
                onChange={handleChange}
                style={{ display: 'none' }}
              />
            </label>
            <span className="file-name">
              {formData.file ? formData.file.name : 'No file chosen'}
            </span>
          </div>
          {errors.file && <span className="error">{errors.file}</span>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default UploadDocument;