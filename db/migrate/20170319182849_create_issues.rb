class CreateIssues < ActiveRecord::Migration[5.0]
  def change
    create_table :issues do |t|
      t.references :slate, foreign_key: true, index: true

      t.string :name
      t.text :reasons
    end
  end
end
