class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :subtitle
      t.text :description
      t.string :technologies
      t.string :img_url
      t.string :live_url
      t.string :github_url

      t.timestamps
    end
  end
end
