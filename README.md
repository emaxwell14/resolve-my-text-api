# T9 Text Predictor

## Endpoint

**/computeLetters**
Returns a JWT token for all subsequent requests.
Verifies the user exists.

*Request JSON body:*
```
{
	"number": "[number]"
}
```
*Validation errors return a 422 Response:*
 - Number must exist in the body.
 - Number must be a string of made up of the following values 234567890.
 - Number cannot exceed 12 digits for performance purposes.

 ### Note on performance:
Using a recursive method to compute the results. This method is very memory intensive so 
in this version of the API, limiting the number length to 12 digits.
