function limit_red_attempts() {
    if (isset($_SERVER['HTTP_REFERER']) && (parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST) != $_SERVER['HTTP_HOST'])) {
        // Redirect to https://codeters.com
        header('Location: https://codeters.com');
        exit;
    }
}
add_action('init', 'limit_red_attempts');
