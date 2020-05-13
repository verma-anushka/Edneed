import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { uploadImg } from "../../store/actions/UploadImage/uploadImage";
  
class UploadImage extends Component { 
  
  componentDidUpdate() {
    this.props.onUpload(this.props.uploadedImage);
  }

  // Check Valid Image - Extension
  isValidExtension = imageFile => {      
    if( !imageFile.match(/\.(jpg|jpeg|png)$/) || imageFile.match(/\.[0-9a-z]+\.(jpg|jpeg|png)$/) ){
        console.log(`'${imageFile}' is not a supported format`)
        return false;
      }
      return true;
  };

  // Check Image Size
  isValidSize = image => {
    if (image.size > 1500) {
      console.log(`'${image.name}' size is very large.`)
      return false;
    }
    return true;
  };  

  // Function call on image upload
  onFileChange = (event) => { 
     
    const imageToUpload = event.target.files[0];
    
    if(imageToUpload) {
    
      // Validation checks
      const isValidByExtension = this.isValidExtension(imageToUpload.name);
      const isValidBySize = this.isValidSize(imageToUpload.size);

      if(isValidByExtension && isValidBySize) {
        const formData = new FormData();
        formData.append( 
          "image", 
          imageToUpload, 
          imageToUpload.name 
        );
        // Action Creator
        this.props.startUploading(formData);
      }      
    }  

  };
     
  render() { 
    
    const { uploadedImage, loading } = this.props;
    const src = `http://api.webunide.com/fs/${uploadedImage._id}`;
    
    let content;
    if(loading) {
      // Loader
      content = <div>Uploading</div>;
    } else {
      content = (
        <div> 
          <input type="file" onChange={this.onFileChange} /> 
          { uploadedImage._id && <img src={src} alt="user" /> }
        </div>
      );
    }

    return (  
      <div>{content}</div>
    ); 
  } 
}

UploadImage.propTypes = {
  uploadedImage: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    uploadedImage: state.uploadImage.image,
    loading: state.uploadImage.loading
  }
};


const mapDispatchToProps = dispatch => {
  return {startUploading: formObj => dispatch(uploadImg(formObj))}
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
