<?php
require_once 'connection/db.connection.php';

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if adminID and adminPass are set in the POST data
    if (isset($_POST['adminID']) && isset($_POST['adminPass'])) {
        // Get adminID and adminPass from POST data
        $adminID = $_POST['adminID'];
        $adminPass = $_POST['adminPass'];

        try {
            // Use the database connection to query for user authentication
            $sql = "SELECT * FROM adminlogin WHERE adminID = ? AND adminPass = ?";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$adminID, $adminPass]);
            $user = $stmt->fetch();

            if ($user) {
                // Authentication successful
                $response = array('success' => true, 'message' => 'Login successful');
            } else {
                // Authentication failed
                $response = array('success' => false, 'message' => 'Invalid credentials');
            }
        } catch (PDOException $e) {
            // Database error
            $response = array('success' => false, 'message' => 'Database error: ' . $e->getMessage());
            http_response_code(500); // Internal Server Error
        }
    } else {
        // If adminID or adminPass is not provided in the POST data
        $response = array('success' => false, 'message' => 'AdminID and AdminPass are required');
        http_response_code(400); // Bad Request
    }
} else {
    // If the request method is not POST
    $response = array('success' => false, 'message' => 'Method not allowed');
    http_response_code(405);
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
