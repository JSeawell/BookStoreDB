function deleteProduct_Bookstore(pid, bid){
    $.ajax({
        url: '/products_bookstores/' + pid + '/' + bid,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
