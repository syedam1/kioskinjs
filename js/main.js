//Kiosk JS

//Pre-Defined Variables to use for testing
let userDefinitions = {
    "controllers": [{
            "name": "PreviewDelayMedia",
            "description": "Delay for media preview",
            "type": "number"
        },
        {
            "name": "PreviewDelayText",
            "description": "Delay for Text Preview",
            "type": "string"
        },
        {
            "name": "PreviewDelayFolder",
            "description": "Delay for folder preview",
            "type": "Boolean"
        }
    ]
}


let controllerDefinitions = {
    "controllers": [{
            "name": "PreviewDelayMedia",
            "description": "Delay for media preview",
            "type": "number"
        },
        {
            "name": "PreviewDelayText",
            "description": "Delay for Text Preview",
            "type": "number"
        },
        {
            "name": "PreviewDelayFolder",
            "description": "Delay for folder preview",
            "type": "Boolean"
        },
        {
            "name": "useContains",
            "description": "use Contains",
            "type": "Boolean"
        },
        {
            "name": "PreviewAutoShow",
            "description": "PreviewAutoShow",
            "type": "Boolean"
        },
        {
            "name": "PreviewAutoHide",
            "description": "PreviewAutoHide",
            "type": "Boolean"
        },
        {
            "name": "AlphaTrans",
            "description": "AlphaTrans",
            "type": "number"
        },
        {
            "name": "PreviewWidth",
            "description": "PreviewWidth",
            "type": "number"
        },
        {
            "name": "URLGetFavicons",
            "description": "URLGetFavicons",
            "type": "Boolean"
        },
        {
            "name": "URLLookup",
            "description": "URLLookup",
            "type": "Boolean"
        },
        {
            "name": "URLLookup",
            "description": "URLLookup",
            "type": "Boolean"
        },
        {
            "name": "WinXFolder",
            "description": "WinXFolder",
            "type": "string"
        },
        {
            "name": "SMFolder",
            "description": "SMFolder",
            "type": "string"
        },
        {
            "name": "SearchFontSize",
            "description": "Search Font Size",
            "type": "number"
        },
        {
            "name": "SearchItemHeight",
            "description": "Search Image Height",
            "type": "number"
        },
        {
            "name": "SearchWidth",
            "description": "Search Width",
            "type": "number"
        },
        {
            "name": "SearchMargin",
            "description": "Search Margin",
            "type": "number"
        },
        {
            "name": "SearchHeight",
            "description": "Search Height",
            "type": "number"
        },
        {
            "name": "SearchPopupCount",
            "description": "Search PopUp Count",
            "type": "number"
        },
        {
            "name": "SearchAlphaTrans",
            "description": "Search Alpha Trans",
            "type": "number"
        },
        {
            "name": "ShowAfterDrop",
            "description": "ShowAfterDrop",
            "type": "Boolean"
        },
        {
            "name": "SearchShowAni",
            "description": "SearchShowAni",
            "type": "Boolean"
        },
        {
            "name": "PreviewShowAni",
            "description": "PreviewShowAni",
            "type": "Boolean"
        }
    ]
}



let controllerDefinitions_show = {
    "PreviewDelayMedia": 1000,
    "PreviewDelayText": 500,
    "PreviewDelayFolder": 100,
    "useContains": false,
    "PreviewAutoShow": true,
    "PreviewAutoHide": true,
    "AlphaTrans": 255,
    "PreviewWidth": 55,
    "URLGetFavicons": true,
    "URLLookup": true,
    "WinXFolder": "C:\\Users\\andrew\\AppData\\Local\\Microsoft\\Windows\\WinX",
    "SMFolder": "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\",
    "SearchFontSize": 12,
    "SearchItemHeight": 90,
    "SearchWidth": 20,
    "SearchMargin": 20,
    "SearchHeight": 50,
    "SearchPopupCount": 12,
    "SearchAlphaTrans": 150,
    "ShowAfterDrop": true,
    "SearchShowAni": true,
    "PreviewShowAni": false
}


/******************DEFINE CONTROLS******************/

/* Define the Triggers */
let define_submit = document.getElementById("control_form_define");
define_submit.onclick = define_controls; //Bind a function to the click on the define button

function define_controls(event) {

    //Get the value from the textArea input field
    userDefined = document.getElementById('control_form_define_input').value;
    if (userDefined == "") {
        //Use the default values.
        console.log("Default Json");
        jsonData = controllerDefinitions['controllers']; //For testing only
    } else {
        //Use the custom values.
        console.log("Custom User input");
        let t = JSON.parse(userDefined);
        jsonData = t['controllers'];
    }

    //console.log(jsonData);

    //Build the form
    // creates a <form> element and a <div class='form-group row'> element
    var form_container = document.getElementById('form_container');
    //form_container.innerHTML = ""; //Empty the container
    var formbody = document.createElement("form"); //Create the form
    formbody.id = "kiosk-inapp-form";

    for (var i = 0; i < jsonData.length; i++) {

        let controller_definition = jsonData[i];

        var form_child_div = document.createElement("div");
        form_child_div.className = "form-group row";
        var form_child_div_label = document.createElement("label");
        form_child_div_label.className = "col-sm-2 col-form-label";
        var labelText = document.createTextNode(controller_definition.description); //The Form input Label/description
        form_child_div_label.appendChild(labelText);
        var form_child_div_input = document.createElement("input");

        if (controller_definition.type == 'Boolean') {
            // Add range 0 and 1
            form_child_div_input.type = "number";
            form_child_div_input.min = "0";
            form_child_div_input.max = "1";
        } else {
            form_child_div_input.type = controller_definition.type; //The Form input Type
        }

        form_child_div_input.className = "form-control";
        form_child_div_input.id = controller_definition.name;
        form_child_div_input.name = controller_definition.name; //The Form input Name
        form_child_div_input.value = "";
        form_child_div_input.placeholder = controller_definition.type;
        var form_child_input_div = document.createElement("div");
        form_child_input_div.className = "col-sm-10";
        form_child_input_div.appendChild(form_child_div_input);
        form_child_div.appendChild(form_child_div_label);
        form_child_div.appendChild(form_child_input_div);
        // add the row to the end of the table body
        formbody.appendChild(form_child_div);
    }

    //Add hidden values
    var form_child_div_input = document.createElement("input");
    form_child_div_input.type = "text";
    form_child_div_input.className = "form-control";
    form_child_div_input.id = "original_data";
    form_child_div_input.name = "original_data";
    form_child_div_input.value = JSON.stringify(jsonData);
    form_child_div_input.type = "hidden";


    ////formbody.appendChild(form_child_div_input);


    ////form_container.appendChild(formbody);
    //appends Submit and Apply buttons
    var btn = document.createElement("BUTTON"); // Create a <button> element
    btn.id = "control_form_apply";
    btn.className = "btn btn-primary";
    btn.innerHTML = "Apply";
    btn.type = "submit";
    btn.onclick = submit_form;
    ///form_container.append(btn);

    var btn = document.createElement("BUTTON"); // Create a <button> element
    btn.id = "control_form_cancel";
    btn.className = "btn btn-light";
    btn.innerHTML = "Cancel";
    btn.type = "submit";
    btn.onclick = cancel_form;
    ///form_container.append(btn);

    //Simply return
    //return jsonObject;
    event.preventDefault();
}



/************SHOW**************/

/* Define the Triggers */
let show_submit = document.getElementById("control_form_show");
show_submit.onclick = show_controls; //Bind a function to the click on the define button


function show_controls(event) {

    if(jsonData){
        console.log("Controllers defined and available to use as Global parameter ");
        console.log(jsonData);
    } else {
        console.log("controllers not defined.");
    }
    
    
    //Get the value from the textArea input field
    userDefined = document.getElementById('control_form_show_input').value;
    if (userDefined == "") {
        //Use the default values.
        console.log("Default Json");
        jsonShowData = controllerDefinitions_show; //For testing only
    } else {
        //Use the custom values.
        console.log("Custom User input");
        jsonShowData = JSON.parse(userDefined);
    }

    //console.log(jsonShowData);

    //Build the form
    // creates a <form> element and a <div class='form-group row'> element
    var form_container = document.getElementById('form_container');
    form_container.innerHTML = ""; //Empty the container
    var formbody = document.createElement("form"); //Create the form
    formbody.id = "kiosk-inapp-form";


    // creates a <form> element and a <div class='form-group row'> element
    var form_container = document.getElementById('form_container');
    var formbody = document.createElement("form");
    formbody.id = "kiosk-inapp-form";

    // creating all cells
    for (var key in jsonShowData) {
        if (jsonShowData.hasOwnProperty(key)) {

            //obtain the controllerDefinitions.
            console.log("Trying "+key);
            if(jsonData.find(x => x.name === key) === undefined || jsonData.find(x => x.name === key) === null){
                console.log("undefined"+key);
                var data_description = key ;
            } else {
                console.log("defined"+key);
                var data_description = jsonData.find(x => x.name === key).description;
            }
            
            if(jsonData.find(x => x.name === key) === undefined || jsonData.find(x => x.name === key) === null){
                var data_type = "text";
            } else { var data_type = jsonData.find(x => x.name === key).type; }
            

            //console.log(key + " | " + jsonShowData[key]);
            var form_child_div = document.createElement("div");
            form_child_div.className = "form-group row";
            var form_child_div_label = document.createElement("label");
            form_child_div_label.className = "col-sm-2 col-form-label";
            var labelText = document.createTextNode(data_description); //The Form input Label/description
            form_child_div_label.appendChild(labelText);
            var form_child_div_input = document.createElement("input");
            form_child_div_input.type = data_type; //The Form input Type
            form_child_div_input.className = "form-control";
            form_child_div_input.id = key;
            form_child_div_input.name = key; //The Form input Name
            form_child_div_input.value = jsonShowData[key];
            var form_child_input_div = document.createElement("div");
            form_child_input_div.className = "col-sm-10";
            form_child_input_div.appendChild(form_child_div_input);
            form_child_div.appendChild(form_child_div_label);
            form_child_div.appendChild(form_child_input_div);
            // add the row to the end of the table body
            formbody.appendChild(form_child_div);
        }
    }

    //Add hidden values
    var form_child_div_input = document.createElement("input");
    form_child_div_input.type = "text";
    form_child_div_input.className = "form-control";
    form_child_div_input.id = "original_data";
    form_child_div_input.name = "original_data";
    form_child_div_input.value = JSON.stringify(jsonShowData);
    form_child_div_input.type = "hidden";


    formbody.appendChild(form_child_div_input);


    form_container.appendChild(formbody);
    //appends Submit and Apply buttons
    var btn = document.createElement("BUTTON"); // Create a <button> element
    btn.id = "control_form_apply";
    btn.className = "btn btn-primary";
    btn.innerHTML = "Apply";
    btn.type = "submit";
    btn.onclick = submit_form;
    form_container.append(btn);

    var btn = document.createElement("BUTTON"); // Create a <button> element
    btn.id = "control_form_cancel";
    btn.className = "btn btn-light";
    btn.innerHTML = "Cancel";
    btn.type = "submit";
    btn.onclick = cancel_form;
    form_container.append(btn);

    
    //Simply return
    //return jsonObject;
    event.preventDefault();

};


/****************Global Functions***************/

function submit_form(event) {
    //Return submitted data as Json
    console.log("form Submitted");
    // Access our form...
    const form = document.getElementById("kiosk-inapp-form");
    const formData = new FormData(form);
    let jsonObject = {};
    for (const [key, value] of formData) {
        jsonObject[key] = value;
    }
    //Return JSON in the format required
    console.log(jsonObject);

    //Display message on screen 
    var form_container = document.getElementById('form_container');
    form_container.innerHTML = ""; //Empty the container

    var message_div = document.createElement('div');
    message_div.className = "alert alert-success";
    message_div.role = "alert";
    message_div.innerHTML = "Form has been successfully submitted";
    form_container.appendChild(message_div);

    //Simply return
    return jsonObject;
    event.preventDefault();
}

function cancel_form(event) {
    //Return Original data as Json
    console.log("form Canceled");
    var original_data = document.getElementById("original_data").value;
    var original_data_object = JSON.parse(original_data);
    //Log to console.
    console.log(original_data_object);

    //Display message on screen 
    var form_container = document.getElementById('form_container');
    form_container.innerHTML = "";
    var message_div = document.createElement('div');
    message_div.className = "alert alert-secondary";
    message_div.role = "alert";
    message_div.innerHTML = "Cancelled";
    form_container.appendChild(message_div);

    //Simply return
    return original_data_object;
    event.preventDefault();
}