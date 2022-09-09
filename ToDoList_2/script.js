document.querySelector('#push').onclick = function () {
    if (document.querySelector('#taskInput').value.length == 0) {
        alert('vvedi task')
    } else {
        document.querySelector('#tasks').innerHTML +=`
        <div class = "task">
          <span id = "taskname">
          ${document.querySelector('#taskInput').value}
          </span>
          <button class="delete">Удалить
          <i class = "far fa-trash-alt"></i>
          </button>
          </div>
          `
          var current_task = document.querySelectorAll(".delete");
          for (var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function() {
                this.parentNode.remove();
                console.log(current_task)
 
            }
          }
    }
    document.querySelector('#taskInput').value = '';
}
let rt = {
    df: 3,
    rt: ty,
    we: df
}
 function df () {
    console.log(this)
 }


