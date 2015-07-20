<?php
include_once("../../../../include/config.php");
// General
$moxieManagerConfig['general.license'] = 'YOUR-LICENSE-KEY';
$moxieManagerConfig['general.hidden_tools'] = '';
$moxieManagerConfig['general.disabled_tools'] = '';
$moxieManagerConfig['general.plugins'] = 'Favorites,History,Uploaded,AutoRename,AutoFormat,SessionAuthenticator';
$moxieManagerConfig['general.demo'] = false;
$moxieManagerConfig['general.debug'] = false;
$moxieManagerConfig['general.language'] = 'en';
$moxieManagerConfig['general.title']= 'Media Manager';
$moxieManagerConfig['general.temp_dir'] = "../../../tinymce/temp";
$moxieManagerConfig['general.cache_dir'] = "../../../tinymce/cache";
$moxieManagerConfig['general.allow_override'] = 'hidden_tools,disabled_tools'; 
 
// Filesystem
$moxieManagerConfig['filesystem.rootpath'] = "../../../upload";  ///webroot/uploads';
$moxieManagerConfig['filesystem.include_directory_pattern'] = '';
$moxieManagerConfig['filesystem.exclude_directory_pattern'] = '/^thumbs$/i';
$moxieManagerConfig['filesystem.include_file_pattern'] = '';
$moxieManagerConfig['filesystem.exclude_file_pattern'] = '/^.htaccess$/';
$moxieManagerConfig['filesystem.extensions'] = '*'; 
$moxieManagerConfig['filesystem.readable'] = true;
$moxieManagerConfig['filesystem.writable'] = true;
$moxieManagerConfig['filesystem.allow_override'] = '*';

// Upload
$moxieManagerConfig['upload.include_file_pattern'] = '';
$moxieManagerConfig['upload.exclude_file_pattern'] = '';
$moxieManagerConfig['upload.extensions'] = 'jpg,jpeg,png,gif,html,htm,txt,swf';
$moxieManagerConfig['upload.maxsize'] = '20MB';
$moxieManagerConfig['upload.overwrite'] = false;
$moxieManagerConfig['upload.autoresize'] = true;
$moxieManagerConfig['upload.autoresize_jpeg_quality'] = 95;
$moxieManagerConfig['upload.max_width'] = 1200;
$moxieManagerConfig['upload.max_height'] = 6000; 
$moxieManagerConfig['upload.chunk_size'] = '5mb';
$moxieManagerConfig['upload.allow_override'] = '*';

// Rename
$moxieManagerConfig['rename.include_file_pattern'] = '';
$moxieManagerConfig['rename.exclude_file_pattern'] = '';
$moxieManagerConfig['rename.include_directory_pattern'] = '';
$moxieManagerConfig['rename.exclude_directory_pattern'] = '';
$moxieManagerConfig['rename.extensions'] = '*';
$moxieManagerConfig['rename.allow_override'] = '*';

// Edit
$moxieManagerConfig['edit.include_file_pattern'] = '';
$moxieManagerConfig['edit.exclude_file_pattern'] = '';
$moxieManagerConfig['edit.extensions'] = 'jpg,jpeg,png,gif,html,htm,txt';
$moxieManagerConfig['edit.jpeg_quality'] = 95;
$moxieManagerConfig['edit.allow_override'] = '*';

// View
$moxieManagerConfig['view.include_file_pattern'] = '';
$moxieManagerConfig['view.exclude_file_pattern'] = '';
$moxieManagerConfig['view.extensions'] = '*';
$moxieManagerConfig['view.allow_override'] = '*';

// Download
$moxieManagerConfig['download.include_file_pattern'] = '';
$moxieManagerConfig['download.exclude_file_pattern'] = '';
$moxieManagerConfig['download.extensions'] = '*';
$moxieManagerConfig['download.allow_override'] = '*';

// Thumbnail
$moxieManagerConfig['thumbnail.enabled'] = true;
$moxieManagerConfig['thumbnail.auto_generate'] = true;
$moxieManagerConfig['thumbnail.use_exif'] = true;
$moxieManagerConfig['thumbnail.width'] = 90;
$moxieManagerConfig['thumbnail.height'] = 90;
$moxieManagerConfig["thumbnail.mode"] = "resize";
$moxieManagerConfig['thumbnail.folder'] = 'thumbs';
$moxieManagerConfig['thumbnail.prefix'] = 'thumbs_';
$moxieManagerConfig['thumbnail.delete'] = true;
$moxieManagerConfig['thumbnail.jpeg_quality'] = 75;
$moxieManagerConfig['thumbnail.allow_override'] = '*'; 

// Authentication
$moxieManagerConfig['authenticator'] = 'SessionAuthenticator';
/*
$moxieManagerConfig['basicauthenticator.users'] = array(
   array(
      "username" => "admin",
      "password" => "admin",
      "email" => "khafidli@ymail.com",
      "groups" => array("administrator"))
);
*/


// SessionAuthenticator
$moxieManagerConfig['SessionAuthenticator.logged_in_key'] = "admin";
$moxieManagerConfig['SessionAuthenticator.user_key'] = "id";
$moxieManagerConfig['SessionAuthenticator.config_prefix'] = "";

// IpAuthenticator
$moxieManagerConfig['IpAuthenticator.ip_numbers'] = '127.0.0.1';

// ExternalAuthenticator
$moxieManagerConfig['ExternalAuthenticator.external_auth_url'] = '/auth.php';
$moxieManagerConfig['ExternalAuthenticator.secret_key'] = 'A000BC77RU';

// Local filesystem
$moxieManagerConfig['filesystem.local.wwwroot'] = '';
$moxieManagerConfig['filesystem.local.urlprefix'] = '{proto}://{host}/';
$moxieManagerConfig['filesystem.local.urlsuffix'] = '';
$moxieManagerConfig['filesystem.local.access_file_name'] = 'mc_access';
$moxieManagerConfig['filesystem.local.allow_override'] = '*';

// Log
$moxieManagerConfig['log.enabled'] = false;
$moxieManagerConfig['log.level'] = 'error';
$moxieManagerConfig['log.path'] = "../../../tinymce/logs";
$moxieManagerConfig['log.filename'] = '{level}.log';
$moxieManagerConfig['log.format'] = '[{time}] [{level}] {message}';
$moxieManagerConfig['log.max_size'] = '100k';
$moxieManagerConfig['log.max_files'] = '10';
$moxieManagerConfig['log.filter'] = '';

// Storage
$moxieManagerConfig['storage.engine'] = 'json';
$moxieManagerConfig['storage.path'] = "../../../tinymce/storage";

// AutoFormat plugin
$moxieManagerConfig['autoformat.rules'] = '800x600=thumbs/%f_%twx%th.%e';
$moxieManagerConfig['autoformat.jpeg_quality'] = 90;
$moxieManagerConfig['autoformat.delete_format_images'] = true;

// AutoRename, remember to include it in your plugin config.
$moxieManagerConfig['autorename.enabled'] = true;
$moxieManagerConfig['autorename.spacechar'] = "_";
$moxieManagerConfig['autorename.lowercase'] = true;
//$moxieManagerConfig['autorename.prefix'] = time().'-';

// GoogleDrive
$moxieManagerConfig['googledrive.client_id'] = '';

// DropBox
$moxieManagerConfig['dropbox.app_id'] = '';

// Amazon S3 plugin
$moxieManagerConfig['amazons3.buckets'] = array(
	'bucketname' => array(
		'publickey' => '',
		'secretkey' => ''
	)
);

// Ftp plugin
$moxieManagerConfig['ftp.accounts'] = array(
	'ftpname' => array(
		'host' => '',
		'user' => '',
		'password' => '',
		'rootpath' => '/',
		'wwwroot' => '/',
		'passive' => true
	)
);

// Favorites plugin
$moxieManagerConfig['favorites.max'] = 20;

// History plugin
$moxieManagerConfig['history.max'] = 20;
