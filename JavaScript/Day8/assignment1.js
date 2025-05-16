const taskInput = document.getElementById('taskInput');     //Taking input from user and storing it in variable
    const taskList = document.getElementById('taskList');   // Storing the task in the list 

    function addTask() {

       if(taskInput.value === '') {         //If the input box is empty then it will not add the task to the list.
        alert('Please enter a task.');     //Alert() function is used to show the message in the pop up box.    
       }

       
      const taskText = taskInput.value.trim();       // Trim() function is removing extra spaces from the start and end of the string.
      if (taskText === '') return;

      const li = document.createElement('li');      // Creating a new list items as a Task
      const span = document.createElement('span');       // Creating a span element to hold the task text
      span.textContent = taskText;

      const editBtn = document.createElement('button');      //creating a extra EDIT button 
      editBtn.textContent = 'Edit';
      editBtn.className = 'edit';
      editBtn.onclick = () => {
        const newText = prompt("Edit your task:", span.textContent);     //Prompt() fucntion is taking input from user to edit the task and storing in newtext for replacing the old one.
        if (newText !== null && newText.trim() !== '') {
          span.textContent = newText.trim();    //storing it in span variable we have used above
        }
      };

      const deleteBtn = document.createElement('button');   ///Crating a delete button to remove the atsk
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete';
      deleteBtn.onclick = () => li.remove();          //remove() function is used to rmove the task from the list here

      li.appendChild(span);                // Appending the span to the li element
      li.appendChild(editBtn);             // Appending the edit button to the li element
      li.appendChild(deleteBtn);           // Appending the delete button to the li element

      taskList.appendChild(li);
      taskInput.value = '';
      taskInput.focus();                  //Focus() function is used to set the cursor in the input box after adding the task.
    }