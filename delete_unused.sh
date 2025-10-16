#!/bin/bash

# List of unused files to delete
UNUSED_FILES=(
"public/assets/img/counter_bg_1.jpeg"
"public/assets/img/counter_shape.png"
"public/assets/img/cta_overlay.png"
"public/assets/img/drag.png"
"public/assets/img/favicon.png"
"public/assets/img/footer_bg.jpg"
"public/assets/img/footer_logo.svg"
"public/assets/img/header_shape.svg"
"public/assets/img/healnexxt-favicon.ico"
"public/assets/img/hero_slider_1.jpg"
"public/assets/img/hero_slider_2.jpg"
"public/assets/img/hero_slider_3.jpg"
"public/assets/img/hero_slider_sm_1.png"
"public/assets/img/hero_slider_sm_2.png"
"public/assets/img/hero_slider_sm_3.png"
"public/assets/img/icons/check_icon_1.png"
"public/assets/img/icons/hero_icon.png"
"public/assets/img/icons/pr.png"
"public/assets/img/icons/service_footer_icon_1.png"
"public/assets/img/icons/service_icon_13.png"
"public/assets/img/icons/service_icon_14.png"
"public/assets/img/icons/service_icon_2.png"
"public/assets/img/icons/service_icon_3.png"
"public/assets/img/icons/service_icon_4.png"
"public/assets/img/icons/service_icon_5.png"
"public/assets/img/icons/service_icon_6.png"
"public/assets/img/icons/service_icon_7.png"
"public/assets/img/icons/service_icon_8.png"
"public/assets/img/icons/service_icon_9.png"
"public/assets/img/icons/tab_link_icon_1.png"
"public/assets/img/icons/tab_link_icon_2.png"
"public/assets/img/icons/tab_link_icon_3.png"
"public/assets/img/icons/tab_link_icon_4.png"
"public/assets/img/logo.svg"
"public/assets/img/medical_solution_2.jpg"
"public/assets/img/offerings01.jpg"
"public/assets/img/offerings02.jpg"
"public/assets/img/offerings03.jpg"
"public/assets/img/offerings04.jpg"
"public/assets/img/post_2.jpeg"
"public/assets/img/post_3.jpeg"
"public/assets/img/post_4.jpeg"
"public/assets/img/post_5.jpeg"
"public/assets/img/post_6.jpeg"
"public/assets/img/project_1.jpg"
"public/assets/img/project_2.jpg"
"public/assets/img/project_3.jpg"
"public/assets/img/recent_post_1.png"
"public/assets/img/recent_post_2.png"
"public/assets/img/schedule_bg_1.jpg"
"public/assets/img/service_bg.jpg"
"public/assets/img/service_bg_2.jpg"
"public/assets/img/service_bg_3.jpg"
"public/assets/img/service_details_1.jpg"
"public/assets/img/service_details_2.jpg"
"public/assets/img/tab_image_1.jpg"
"public/assets/img/team_7.jpg"
"public/assets/img/team_8.jpg"
)

echo "Deleting unused files..."
echo "========================"

deleted_count=0
total_size=0

for file in "${UNUSED_FILES[@]}"; do
    if [[ -f "$file" ]]; then
        # Get file size before deletion
        size=$(stat -f%z "$file" 2>/dev/null || echo "0")
        total_size=$((total_size + size))
        
        echo "Deleting: $file ($(numfmt --to=iec $size))"
        rm "$file"
        deleted_count=$((deleted_count + 1))
    else
        echo "File not found: $file"
    fi
done

echo ""
echo "Summary:"
echo "========="
echo "Files deleted: $deleted_count"
echo "Total space saved: $(numfmt --to=iec $total_size)"
