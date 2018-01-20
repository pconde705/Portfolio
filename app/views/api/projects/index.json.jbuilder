@projects.each do |project|
    json.set! project.id do
        json.extract! project,
            :id, :title, :subtitle,
            :description, :img_url,
            :technologies
    end
end