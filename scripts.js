
let uploadedFile = undefined;

document.querySelector("#upload").addEventListener("change", () => {
    const upload = document.querySelector("#upload");
    const imageview = document.querySelector("#imageview img");
    const imagePreview = document.querySelector("#cropview img");

    uploadedFile = upload.files[0];
    var reader = new FileReader();

    imageview.title = uploadedFile.name;

    reader.onload = function (event) {
        imageview.src = event.target.result;
        imagePreview.src = event.target.result;
    };

    reader.readAsDataURL(uploadedFile);
});

let cropperposition = { x: 0, y: 0 };

interact('#cropper').draggable({
    listeners: {
        move(event) {
            cropperposition.x += event.dx
            cropperposition.y += event.dy
            event.target.style.top = `${cropperposition.y}px`;
            event.target.style.left = `${cropperposition.x}px`;
            document.querySelector('#cropview img').style.top = `${-cropperposition.y * 5}px`;
            document.querySelector('#cropview img').style.left = `${-cropperposition.x * 5}px`;
        },
    }
})