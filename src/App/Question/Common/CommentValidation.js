import ValidationLib from "../../../Classes/Validation";

class CommentValidation extends ValidationLib {
    
    constructor(){
        super();
        this.commentValidation = this.getDefault()
    }

    setOwner = owner =>{
        this.commentValidation.owner = owner;
    }

    setPost = postId =>{
        this.commentValidation.post = postId
    }
    
    handleInput = e =>{
        
        let inputName = e.target.name;
        let inputValue = e.target.value;
        // console.log(inputName,inputValue);
        const commentFormData = {
            ...this.commentValidation,
            [inputName]:{
                value:inputValue,
                isValid:this.isNotEmpty(inputValue)
            }
        }
        
        this.commentValidation = commentFormData;
    }

    getFormInput = () =>{
        return this.commentValidation
    }

    isValid = () =>{
        return this.commentValidation.comment.isValid;
    }

    getFormInputData = () =>{
        return {
            text:this.commentValidation.comment.value,
            post:this.commentValidation.post,
            owner:this.commentValidation.owner
        };
    }

    getDefault = () =>{
        return {
            comment:{
                value:"",
                isValid:false
            },
            post:"",
            owner:""
        };
    }

    resetToDefault = () =>{
        this.commentValidation = this.getDefault();
    }

    setFormInputData = comment =>{
        this.commentValidation.comment.value=comment;
        this.commentValidation.comment.isValid=true
    }
}

export default new CommentValidation();
