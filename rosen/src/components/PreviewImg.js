
const refPhoto = document.getElementById('refPhoto')
const PreviewContainer = document.getElementById('referenceBoxPhoto')
const PreviewImage = PreviewContainer.querySelector('.referenceBox__refPhoto')
const PreviewDefaultText = PreviewContainer.querySelector('.referenceBox__defaultTextref')

refPhoto.addEventListener("change" ,function(){
    const file = this.files[0]
    console.log(file)

    if(file){
        const reader = new FileReader(); 
        PreviewDefaultText.style.display = "none"; 
        PreviewImage.style.display = "block"; 
        reader.addEventListener('load', function(){
            console.log(this)
            PreviewImage.setAttribute("src", this.result)
        });
        reader.readAsDataURL(file)
    }

});
