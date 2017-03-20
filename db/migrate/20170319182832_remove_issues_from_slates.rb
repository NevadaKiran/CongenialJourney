class RemoveIssuesFromSlates < ActiveRecord::Migration[5.0]
  def change
  	remove_column :slates, :issue1
  	remove_column :slates, :issue1_reasons

  	remove_column :slates, :issue2
  	remove_column :slates, :issue2_reasons

  	remove_column :slates, :issue3
  	remove_column :slates, :issue3_reasons
  end
end
