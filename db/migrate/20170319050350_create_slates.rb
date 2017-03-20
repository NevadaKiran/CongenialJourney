class CreateSlates < ActiveRecord::Migration[5.0]
  def change
    create_table :slates do |t|
      t.references :user, foreign_key: true, index: true

      t.string :president
      t.text :president_reasons

      t.string :us_senate
      t.text :us_senate_reasons
      t.string :us_congress
      t.text :us_congress_reasons

      t.string :nv_senate
      t.text :nv_senate_reasons
      t.string :nv_assembly
      t.text :nv_assembly_reasons

      t.string :city_council1
      t.text :city_council1_reasons
      t.string :city_council2
      t.text :city_council2_reasons

      t.string :judge1
      t.text :judge1_reasons
      t.string :judge2
      t.text :judge2_reasons
      t.string :judge3
      t.text :judge3_reasons

      t.string :issue1
      t.text :issue1_reasons
      t.string :issue2
      t.text :issue2_reasons
      t.string :issue3
      t.text :issue3_reasons

      t.timestamps null: false
    end
  end
end
