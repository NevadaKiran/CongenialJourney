class AddNameToSlates < ActiveRecord::Migration[5.0]
  def change
    add_column :slates, :name, :string
  end
end
