"use strict";

// get the country input
var country = document.getElementById('pays');

// get pass and pass-confirm inputs
var pass = document.getElementById('pass');
var passConfirm = document.getElementById('pass-confirm');

// get mail and mail-confirm inputs
var mail = document.getElementById('mail');
var mailConfirm = document.getElementById('mail-confirm');


// function that check if values and confirm values match
function isMatched(v, c)
{
    if (v.value.length !== 0 && v.value.length > 3 && v.value === c.value)
    {
        if(v.classList.contains("is-invalid") === true && c.classList.contains("is-invalid") === true)
        {
            v.classList.remove("is-invalid");
            c.classList.remove("is-invalid");
        }
        v.classList.add("is-valid");
        c.classList.add("is-valid");
    }
    else
    {
        if(v.classList.contains("is-valid") === true && c.classList.contains("is-valid") === true )
        {
            v.classList.remove("is-valid");
            c.classList.remove("is-valid");
        }
        v.classList.add("is-invalid");
        c.classList.add("is-invalid");
    }
}

// function that check if user selected a country
function getCountry(c)
{
    if(c.value !== "Choix...")
        c.classList.add("is-valid");
    else
        if(c.classList.contains('is-valid') === true)
            c.classList.remove("is-valid");
}

function validate(pass, passConfirm, country){
    if (getCountry(country) && isMatched(pass, passConfirm))
        return true;
    else
        return false;
}