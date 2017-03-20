class AddSharedToSlates < ActiveRecord::Migration[5.0]
  def change
    add_column :slates, :shared, :boolean, default: false
  end
end
