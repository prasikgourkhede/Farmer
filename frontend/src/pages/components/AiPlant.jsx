import React, { useState } from 'react';
import './AiPlant.css';

function AiPlant() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setAnalysisResult(null);
    }
  };

  const analyzePlant = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    
    try {
      // Simulate API call to backend
      setTimeout(() => {
        const mockResult = {
          plantName: "Tomato Plant",
          healthStatus: "Healthy",
          confidence: 94.5,
          summary: "Your tomato plant is in good health with optimal growth conditions. Minor signs of early blight detected on lower leaves. Recommended to apply organic fungicide and maintain current watering schedule. The plant shows strong fruiting potential with adequate nutrient levels."
        };
        
        setAnalysisResult(mockResult);
        setIsAnalyzing(false);
      }, 2000);

    } catch (error) {
      console.error('Analysis failed:', error);
      setIsAnalyzing(false);
    }
  };

  const clearAnalysis = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setAnalysisResult(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
  };

  return (
    <div className="ai-plant-container">
      <div className="ai-plant-header">
        <h1>AI Plant Analysis</h1>
        <p>Upload a plant image for instant health analysis and recommendations</p>
      </div>

      <div className="ai-plant-content">
        {/* Upload Section */}
        <div className="upload-section">
          <div className="upload-card">
            <div className="upload-area">
              {!imagePreview ? (
                <div className="upload-placeholder">
                  <div className="upload-icon">🌿</div>
                  <h3>Upload Plant Image</h3>
                  <p>JPG, PNG, WebP • Max 5MB</p>
                  <label htmlFor="plant-upload" className="upload-btn">
                    Choose File
                  </label>
                  <input
                    id="plant-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file-input"
                  />
                </div>
              ) : (
                <div className="image-preview">
                  <img src={imagePreview} alt="Plant preview" />
                  <button onClick={clearAnalysis} className="clear-btn">
                    ×
                  </button>
                </div>
              )}
            </div>

            {imagePreview && !analysisResult && (
              <button 
                onClick={analyzePlant} 
                className="analyze-btn"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <div className="spinner"></div>
                    Analyzing...
                  </>
                ) : (
                  'Analyze Plant'
                )}
              </button>
            )}
          </div>
        </div>

        {/* Results Container */}
        {analysisResult && (
          <div className="results-container">
            <div className="results-header">
              <h2>Analysis Complete</h2>
              <div className="confidence-badge">
                {analysisResult.confidence}% Confidence
              </div>
            </div>

            <div className="results-content">
              <div className="plant-basic-info">
                <div className="plant-name">
                  <strong>Plant:</strong> {analysisResult.plantName}
                </div>
                <div className={`health-status ${analysisResult.healthStatus.toLowerCase()}`}>
                  <strong>Status:</strong> {analysisResult.healthStatus}
                </div>
              </div>

              <div className="analysis-summary">
                <h3>Analysis Summary</h3>
                <p>{analysisResult.summary}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiPlant;