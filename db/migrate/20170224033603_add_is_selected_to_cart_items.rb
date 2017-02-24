class AddIsSelectedToCartItems < ActiveRecord::Migration[5.0]
  def change
    add_column :cart_items, :is_selected, :boolean, default: false
  end
end
