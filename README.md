Usage
Sorting by Twubric Score, Friends, Influence, and Chirpiness:

Click on the respective button to sort followers by that criterion.
The sort order will toggle between ascending and descending on each click.
The current sort order is indicated by an upward or downward arrow next to the button.
Filtering by Join Date:

Select a start date and an end date using the date inputs.
Click the "Submit" button to filter followers who joined Twitter within the selected date range.
The filtered results will be displayed, sorted by join date in ascending or descending order based on the current sort order.
Components
Main Component (Main.js):

Fetches followers data from the provided URL.
Manages state for followers, sort order, and date filters.
Implements sorting and filtering logic.
SortButtons Component (SortButtons.js):

Displays sorting buttons for various criteria.
Shows date inputs for filtering followers by join date.
Displays appropriate SVG arrows based on the current sort order.
FollowerList Component (FollowerList.js):

Displays the list of followers.

Updates dynamically based on sorting and filtering.

Styling
Basic styling is provided via main.css.

Additional styles for SVG icons and buttons.
Example Data
The application fetches followers data from the following URL:

bash
Copy code
https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json
Key Functions
getData: Fetches the followers data.

convertDateToUnixTimestamp: Converts a date string to a Unix timestamp and updates the state.
convertDateToUnixTimestamp1: Converts a date string to a Unix timestamp and updates the state for the end date.

handleSort: Sorts followers based on the selected criterion and toggles the sort order.
onSortByDate: Filters followers by the selected date range and sorts by join date.

Dependencies
React
Axios




