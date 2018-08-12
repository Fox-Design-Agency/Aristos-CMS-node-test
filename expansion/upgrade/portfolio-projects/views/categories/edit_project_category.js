<%- include("../../../../../important/admin/views/_layouts/adminheader") %>
    <h2 class="admin-page__main-title">edit a portfolio category</h2>
    <% include ../../../../../important/admin/views/_layouts/messages/errors %>
    <button class="admin-button admin-button--add-something"> 
        <a  href="/admin/portfolio-categories">
            <i class="fa fa-hand-point-left"></i>
        </a>
    </button>
    <br>
    <br>

    <form method="post" action="/admin/portfolio-categories/edit-portfolio-category/<%= id %>" class="admin-form">
        <div class="admin-form__form-options--bottom-group">
            <div class="admin-form__form-options">
                <div class="admin-form__group">
                    <label for="">Title</label>
                    <input type="text" class="form-control" name="title" value="<%= title %>" placeholder="Title">

                </div>
                <div class="admin-form__group">
                    <label for="">Author</label>
                    <input type="text" class="form-control" name="author" value="<%= author %>" placeholder="Author">

                </div>
               
            </div>
            <div class="admin-form__form-options admin-form__form-options--second-group">
                <div class="admin-form__group">
                    <label for="">Meta Description</label>
                    <textarea class="admin-form--disabled-resize" rows="4" name="description" placeholder="Place a brief description of this product category. Max of 320 characters including spaces."
                        maxlength="320"></textarea>
                </div>
                <div class="admin-form__group">
                    <label for="">Meta Keywords</label>
                    <textarea class="admin-form--disabled-resize" rows="4" name="keywords" placeholder="Place your keywords seperated by a comma. Max of 300 characters. EX. neat product, neater category, neatest person"
                        maxlength="300"></textarea>
                </div>

            </div>
        </div>
        <button class="admin-button admin-button--submit">Submit</button>
    </form>
    <%- include("../../../../../important/admin/views/_layouts/adminfooter") %>
