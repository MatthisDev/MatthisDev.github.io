// fonction principale pour faire bouger les images
function event_images(){
    // déclaration variable + tableau
    let image_1 = document.getElementsByClassName("image_1")[0],
        image_2 = document.getElementsByClassName("image_2")[0],
        image_3 = document.getElementsByClassName("image_3")[0];
    
    images_stack = new Array(image_1,
                             image_2,
                             image_3);

    image_1.addEventListener('mouseover', Fimage_1);
    image_2.addEventListener('mouseover', Fimage_2);
    image_3.addEventListener('mouseover', Fimage_3);

    // les fonctions sont similaires 
    function Fimage_1(){
        /*Anti-spam, permet d'éviter les bugs, en ne permetant pas à l'utilisateur de pouvoir 
        activer une autre annimation pendant l'execution d'une*/
        image_2.removeEventListener('mouseover', Fimage_2);
        image_3.removeEventListener('mouseover', Fimage_3);
        // on reactive la posibilitée 1s après le début de l'exec
        setTimeout(() => {
            image_2.addEventListener('mouseover', Fimage_2);
            image_3.addEventListener('mouseover', Fimage_3); 
        }, 1200);

        // identification de l'image activé + envoie à la fonction de démarage 
        let image_element = "image_1"; 
        image_positionnement(images_stack, image_element);
    }
    function Fimage_2(){
        image_1.removeEventListener('mouseover', Fimage_1);
        image_3.removeEventListener('mouveover', Fimage_3);
        setTimeout(() => {
            image_1.addEventListener('mouseover', Fimage_1);
            image_3.addEventListener('mouseover', Fimage_3);
        }, 1200);

        let image_element = "image_2";
        image_positionnement(images_stack, image_element);
    }
    function Fimage_3(){
        image_1.removeEventListener('mouseover', Fimage_1); 
        image_2.removeEventListener('mouseover', Fimage_2);
        setTimeout(() => {
            image_1.addEventListener('mouseover', Fimage_1);
            image_2.addEventListener('mouseover', Fimage_2);
        }, 1200); 

        let image_element = "image_3";
        image_positionnement(images_stack, image_element);
    }
}
// selon où est l'image on l'a fait bouger vers le haut ou vers le bas
function image_positionnement(images_stack = Array(), image_element){
    let transi_time = 150; 

    // detection de la position de notre image, si elle est en haut, milieux, bas
    for(i = 0; i<= 2; i++){
        if(images_stack[i].classList == image_element){
            //une fois fait on commence à changer les positions selon où elle se trouve
            //top to mid
            if(i == 0){
                image_move_down(images_stack, 0, transi_time);
            }
            //mid to bottom
            if(i == 1){
                image_move_down(images_stack, 1, transi_time);
            }
            //bottom to mid
            if(i == 2){
                image_move_up(images_stack, 2, transi_time);
            }
        }
    }
}

// fonction image_move_down + image_move_up on un fonctionnement similaire dans l'ensemble
function image_move_down(images_stack = Array(), i, transi_time){
    // en cas extrème de bug
    if(i >= 2){
        alert("PROBLEME I");
        return console.log("PROBLEME : avec i qui va pas au bonne endroit"); 
    }
    // active le mouvement des images concernées
    // celle du mouseover + celle à qui on prend sa place
    
        images_z_index(images_stack, i);
        images_stack[i+1].classList.add("move-active");
        images_stack[i].classList.add("move-active");
        setTimeout(function(){

            images_stack[i+1].classList.add("move-to-up");
            images_stack[i].classList.add("move-to-down");
            setTimeout(function(){

                images_stack[i].classList.remove("move-active"); 
                images_stack[i].classList.remove("move-to-down");
        
                images_stack[i+1].classList.remove("move-active");
                images_stack[i+1].classList.remove("move-to-up");
                
                images_stack = define_new_position(images_stack, i);
                
            }, transi_time);
        }, 0);
}

function image_move_up(images_stack = Array(), i, transi_time){
    if(i < 2){
        alert("PROBLEME I");
        return console.log("PROBLEME : avec i qui va pas au bonne endroit dans \"image_move_up\"");
    }
        images_z_index(images_stack, i);
        images_stack[i].classList.add("move-active");
        images_stack[i-1].classList.add("move-active");
        setTimeout(function(){

            images_stack[i-1].classList.add('move-to-down');
            images_stack[i].classList.add("move-to-up");
            setTimeout(function(){

                images_stack[i].classList.remove("move-active");
                images_stack[i-1].classList.remove("move-active");
        
        
                images_stack[i].classList.remove("move-to-up");
                images_stack[i-1].classList.remove("move-to-down");
        
                define_new_position(images_stack, i);
                
            }, transi_time);
        }, 0);
}

//on réorganise le tableau selon la position des images (permet une bonne organisation)
function define_new_position(images_stack = Array(), i){
    // selon son mouvement on ne bouge pas de la même manière
    // top to mid
    if(i == 0){
        let copie; 
        //nouvelles coordonnées et on bouge les éléments dans le tableau

        // image qui est moseover
        images_stack[0].style.left = "33cm";
        images_stack[0].style.top = "35%";
        images_stack[0].style.zIndex = "2";
        // image qui est bougé car l'autre prend ca place
        images_stack[1].style.left ="30cm";
        images_stack[1].style.top ="15%";
        images_stack[1].style.zIndex = "3";

        copie = images_stack[1];
        //suppr l'image mid
        images_stack.splice(1, 1);
        //ajoute au début du tableau
        images_stack.unshift(copie);
        // mid to bottom
    }else if(i == 1){
        let copie
        // pareil mais quand c'est l'image du qui switch
        images_stack[1].style.left = "36cm";
        images_stack[1].style.top = "55%";
        images_stack[1].zIndex = "1";

        images_stack[2].style.left ="33cm";
        images_stack[2].style.top ="35%";
        images_stack[2].style.zIndex = "2";

        copie = images_stack[1]; 
        images_stack.splice(1,1);
        //on met copie à la fin
        images_stack.push(copie);

        //bottom to mid
    }else if(i == 2){
        let copie;
        // encore...
        images_stack[2].style.left = "33cm";
        images_stack[2].style.top = "35%";
        images_stack[2].style.zIndex = "2";

        images_stack[1].style.left ="36cm";
        images_stack[1].style.top ="55%";
        images_stack[1].style.zIndex = "1";

        copie = images_stack[1]; 
        images_stack.splice(1,1);

        images_stack.push(copie);

    } 
}

// met les images selon leurs postions à un certain plan
function images_z_index(images_stack, i){
    // veut dire qu'elle va du haut au milieux
    // recap des calques : 3 -> en haut; 2 -> au milieux; 1 -> en bas;
    if(i == 0){
        images_stack[0].style.zIndex = "2";
        images_stack[1].style.zIndex = "3";
        images_stack[2].style.zIndex = "1";
    }else if(i >= 1){
        images_stack[0].style.zIndex = "3";
        images_stack[1].style.zIndex = "1";
        images_stack[2].style.zIndex = "2";
    }else{
        console.log("BUG NIVEAU Z-INDEX");
    }

}

// animation d'attente, utilisation d'une librairie d'animation de texte 
function waiting_anim(){
    const waiting = document.getElementById("waiting-anim");
    new Typewriter(waiting, {
        loop: true, 
        delay: 400,
        deleteSpeed: 400,
        cursor: null
    })
    .typeString('...')
    .start();
}

// active l'animation des images
event_images();

// active les points de chargements
waiting_anim();