# T9 Text Predictor

## Endpoint

**POST /computeLetters**

For a given number string, returns an array of all possible text combinations.

*Request JSON body:*
```
{
  "number": "24"
}
```

*Response JSON body:*
```
{
	data: ["ag", "ah", "ai", "bg", "bh", "bi", "cg", "ch", "ci"]
}
```

*Validation errors return a 422 Response:*
 - Number must exist in the body.
 - Number must be a string of made up of the following values 234567890.
 - Number cannot exceed 12 digits for performance purposes.

 ### Note on performance:
Using a recursive method to compute the results. This method is very memory intensive so 
in this version of the API, limiting the number length to 12 digits.
