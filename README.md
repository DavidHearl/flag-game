# Flags of the World

## Creating the array
To create the array I coppied all of the image files from the directory and inserted them into excel, from there I used the find and replace feature to remove the .png then created a simple calulation to build up a string.
= "{country:'" & PROPER(A1) & "',image:'" & A1 & "',fact:''},"

## Bugs

* One of the initial 'bugs' is with the random selection of the flag. There is a chance that the same flag will be selected back to back. However, The probability of this is very low at 1/64,516 (0.00155%). The issue comes when randomly selecting answers to the question, the probability of 2 values being the same when randomly selecting from the array is at least 2.4%. Running an example 10,000,000 times it returned 3.94%
