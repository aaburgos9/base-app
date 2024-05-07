export const STATE_ERROR = 0;
export const STATE_SUCESS = 1;
export const STATUS_NORMAL = 1;

export const LOGGER = 'logger';
export const STEP_ID = 'step';
export const PAYLOAD = 'payload';
export const LOADING = 'loading';
export const MODAL = 'modal';
export const LOADER = 'loader';
export const MODAL_VALUE = 'modal_value';
export const ONCALL = 'onCall';
export const GUARD_PRODUCTO = 'PROCESOPROALIV';
export const ACTIONFROMSTEP = 'actionFromStep';
export const ACTIONAPPFINISH = 'actionAppFinish';
export const CLIENT_ID = 'ClientId';
export const CALLBACK_WF = 'callbackWf';
export const ADDRESS_CONTROL = 'addresDataControl';
export const STEPSEGURO_ID = 'stepSeguro';
export const SELECTSEGURO = 'selectSeguro';
export const PRODUCTO_DATASEARCH = 'CTACONVENIO';
export const MOBILE_ENROLLMENT_KEY = 'mobileEnrollmentKey';
export const SERVER_ENROLLMENT_KEY = 'serverEnrollmentKey';
export const REFERED = 'refered';
export const MODULO_PRODUCT = 'moduleProduct';
export const URL_IMAGE_ASSETS_LAYOUT = './assets/img/layout/';

/*  Added for Countries  */
export const PAIS = 'pais';
export const ALIADO = 'alido';
export const MODULO = 'modulo';
export const CANAL = 'canal';
export const LENGUAJE = 'lenguaje';
export const NOMBRECLIENTE = 'nombreCliente';
export const KIND = {
	KEY: 'kind',
	DATA: 'crrt'
};
export const PROPERTY = 'property';
export const AUTH_VIEW = 'authView';

/*  Added for PostMessages  */
export const POST_TOKEN = 'postMessagesToken';
export const APP_READY = 'appReady';
export const REGISTER_PATH = 'registerPath';
export const APP_SETTITLE = 'setTitle';

export const APP_FINISH = 'appFinish';
export const NAVIGATE = 'navigate';
export const DEFAULT_ERR_MESSAGE = 'catCRRT_MSG_ERR_500';

export const ACCESS_TOKEN = 'access-token';
export const REFRESH_TOKEN = 'refresh-token';

/*  Added for Tagging Plan  */
export const DATATAGGING = 'data_tagging';
export const ZONE = 'zone';
export const INTERNA = 'int';
export const EXTERNA = 'ext';
export const RUTA = 'ruta';
export const SI = 'Si';
export const NO = 'No';
export const MESSAGE_MODAL = 'messageModal';
export const TITLE_MODAL = 'titleModal';
export const BTN_MODAL = 'nombrebtn';
export const ORIGEN = 'origen';
export const PRODUCTO = 'producto';
export const NOMBRE_EMPRESA = 'nombreEmpresa';
export const REPRESENTANTE_LEGAL = 'representanteLegal';
export const CODIGO_ASESOR = 'codigoAsesor';
export const ZERO = '0';

export const TRANSLATE = {
	LENGUAJE: 'lenguajeDefault',
	URL: './assets/i18n/'
};

export const MBAAS_ROUTING = {
	APPBOOT: 'solicitudInicial',
	APPBOOTTOKEN: 'proceso',
	PROYECTO: 'rotativo',
	FORBBIDEN: 'forbbiden',
	SEGUROS: (cardSelected) => `/visual-seguros/${cardSelected}`
};

export const MBAAS_STEPS = {
	APPBOOT: 'ROTATIVO000',
	BYC0010: {
		STEP: 'BYC0010',
		ROUTE: 'beneficios',
		ROUTE_ID: 'byc0010'
	}
};

export const BOTONES_FLUJO = {
	ATRAS: true,
	CONTINUAR: false
};


export const THEMES = {
	16: 'stylesweb.css',
};

export const DEFAULT_THEME = 'styles.css';

export const CANALES = {
	16: 'WEB',
	37: 'APP',
	WEB: '16',
	APP: '37',
};

export const PRODUCTS = {
	MENUBOX: 'BOX',
	SEELESS: 'seeLess',
	CARD: 'CARD',
	BACKBUTTON: 'BACK'
}

export const ERR_INVALID_PLATFORM = 'catCRRT_MSG_ERR_CANAL'
export const ERROR_MESSAGE = {

	title: '',
	message: 'Comunicación no disponible en este momento, intente más tarde.',
	buttons: [
		{
			buttonText: 'Aceptar'
		}
	]

}
