let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnCleanup = $('#btnCleanup');
let inpNewTask = $('#inpNewTask');
let btnSort = $('#btnSort');

function addItem()
{
    let listItem = $('<li>',{
        'class': 'list-group-item',
        text : inpNewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputtButtons()
}

function clearDone()
{
  $('#ulTasks .done').remove()
  toggleInputtButtons()
}
function sortTasks()
{
  $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputtButtons()
{
   
    btnReset.prop('disabled' , inpNewTask.val()=='')
    btnAdd.prop('disabled' , inpNewTask.val()=='')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)

}

inpNewTask.keypress((e) =>{
if(e.which == 13)
{
  addItem()
}
})
inpNewTask.on('input',toggleInputtButtons)

btnAdd.click(addItem)
btnReset.click(() => 
{
  inpNewTask.val('')
  toggleInputtButtons()

})
btnCleanup.click(clearDone)
btnSort.click(sortTasks)
